let listings;

export default class ListingsDAO {
  static async injectDB(conn) {
    if (listings) {
      return;
    }
    try {
      listings = await conn
        .db(process.env.LISTINGSREVIEWS_NS)
        .collection("listings");
    } catch (e) {
      console.error(`unable to connect in ListingsDAO: ${e}`);
    }
  }

  static async getListings({
    // default filter
    filters = null,
    page = 0,
    listingsPerPage = 10, // will only get 20 listings at once
  } = {}) {
    let query;
    if (filters) {
      if ("place" in filters) {
        query = { $text: { $search: filters["place"] } };
      } else if ("rated" in filters) {
        query = { rated: { $eq: filters["rated"] } };
      }
    }
    let cursor;
    try {
      cursor = await listings
        .find(query)
        .limit(listingsPerPage)
        .skip(listingsPerPage * page);
      const listingsList = await cursor.toArray();
      const totalNumListings = await listings.countDocuments(query);
      return { listingsList, totalNumListings };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { listingsList: [], listingsList: 0 };
    }
  }
}

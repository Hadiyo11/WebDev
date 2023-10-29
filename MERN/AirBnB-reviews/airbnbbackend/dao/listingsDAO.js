let listingsAndReviews;

export default class listingsAndReviewsDAO {
  static async injectDB(conn) {
    if (listingsAndReviews) {
      return;
    }
    try {
      listingsAndReviews = await conn
        .db(process.env.LISTINGSREVIEWS_NS)
        .collection("listingsAndReviews");
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
      if ("area" in filters) {
        query = { $text: { $search: filters["area"] } };
      } else if ("rated" in filters) {
        query = { review_scores: { $eq: filters["review_scores"] } };
      }
    }
    let cursor;
    try {
      cursor = await listingsAndReviews
        .find(query)
        .limit(listingsPerPage)
        .skip(listingsPerPage * page);
      const listingsList = await cursor.toArray();
      const totalNumListings = await listingsAndReviews.countDocuments(query);
      return { listingsList, totalNumListings };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { listingsList: [], listingsList: 0 };
    }
  }
}

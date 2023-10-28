import ListingsDAO from "../dao/listingsDAO.js";

export default class ListingsController {
  static async apiGetListings(req, res, next) {
    const listingsPerPage = req.query.listingsPerPage
      ? parseInt(req.query.listingsPerPage)
      : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    let filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.place) {
      filters.place = req.query.place;
    }

    const { listingsList, totalNumListings } = await ListingsDAO.getListings({
      filters,
      page,
      listingsPerPage,
    });

    let response = {
      listings: listingsList,
      page: page,
      filters: filters,
      entries_per_page: listingsPerPage,
      total_results: totalNumListings,
    };
    res.json(response);
  }
}

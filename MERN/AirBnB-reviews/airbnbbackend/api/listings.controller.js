import ListingsAndReviewsDAO from "../dao/listingsDAO.js";

export default class ListingsController {
  static async apiGetListings(req, res, next) {
    const listingsPerPage = req.query.listingsPerPage
      ? parseInt(req.query.listingsPerPage)
      : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    let filters = {};
    if (req.query.review_scores) {
      filters.review_scores = req.query.review_scores;
    } else if (req.query.area) {
      filters.area = req.query.area;
    }

    const { listingsList, totalNumListings } = await ListingsAndReviewsDAO.getListings({
      filters,
      page,
      listingsPerPage,
    });

    let response = {
      listingsAndReviews: listingsList,
      page: page,
      filters: filters,
      entries_per_page: listingsPerPage,
      total_results: totalNumListings,
    };
    res.json(response);
  }
}

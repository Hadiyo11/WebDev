import express from 'express'
import ListingsController from './listings.controller.js'
const router = express.Router()
router.route('/').get(ListingsController.apiGetListings)
export default router
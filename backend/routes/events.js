import express  from "express";
import { createNewEvent, deleteEvent, getAllEvents, getFeaturedEvents, 
         getSingleEvent, getEventsBySearch, getEventsCount, updateEvent } from "../Controllers/eventController.js";

const router = express.Router()              

router.post('/', createNewEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)
router.get('/:id', getSingleEvent)
router.get('/', getAllEvents)
router.get('/search/getEventBySearch', getEventsBySearch)
router.get('/search/getFeaturedEvents', getFeaturedEvents)
router.get('/search/getEventCount', getEventsCount)

export default router

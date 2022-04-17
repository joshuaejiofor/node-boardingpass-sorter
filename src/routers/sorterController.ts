import * as express from 'express';
import { SorterService } from '../services/sorterService'
import auth from '../middleware/auth'
import { validateData } from '../utils/getDirection';
import { BoardingCard } from '../models/boardingCard';

const sortRouter = express.Router();

sortRouter.post('/api/v1/sorter', auth, (req, res) => {
    try{
        if(!req.body)     
            return res.status(404).send({error: "Invalid request"})       
            
        let boardingCards = validateData(<BoardingCard[]> JSON.parse(JSON.stringify(req.body)))
        let sortedBoardingCards = new SorterService().SortBoardingCards(boardingCards);

        if(!sortedBoardingCards)
            return res.status(404).send({error: "No data found" })
        
        let result = sortedBoardingCards.map(card => {
            return card.getString();
        })

        result.push(`${sortedBoardingCards.length + 1}. You have arrived at your final destination.`) 
        console.log(result)

        res.send(result);
    }
    catch(e){
        res.status(400).send(e)
    }

})


export default sortRouter;
import * as express from 'express';
import { BoardingCard } from '../models/boardingCard';
import { SorterService } from '../services/sorterService'
import auth from '../middleware/auth'
import { getString } from '../utils/getDirection';

const sortRouter = express.Router();

sortRouter.post('/api/v1/sorter', auth, (req, res) => {
    try{
        if(!req.body)     
            return res.status(404).send({error: "Invalid request"})       
            
        const sorterService = new SorterService();
        const boardingCards = <BoardingCard[]> JSON.parse(JSON.stringify(req.body))

        let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);

        if(!sortedBoardingCards)
            return res.status(404).send({error: "No data found" })
        
        let result = sortedBoardingCards.map(card => {
            console.log(getString(card))
            return getString(card);
        })

        let welcomeMsg = `${sortedBoardingCards.length + 1}. You have arrived at your final destination.`
        console.log(welcomeMsg)
        result.push(welcomeMsg)

        res.send(result);
    }
    catch(e){
        res.status(400).send(e)
    }

})


export default sortRouter;
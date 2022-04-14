import request from 'supertest'
import app from '../app'
import { BoardingCard } from '../src/models/boardingCard'
import { testData, token } from './testData'

beforeAll(async () => {
    jest.setTimeout(15000);    
})

// Check Stations Api
test('Check endpoint /api/v1/sorter', async () => {
    const response = await request(app)
        .get(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${token}`)
        .send(JSON.stringify(testData))
        .expect(200)

    var boardingCards = <BoardingCard[]> JSON.parse(JSON.stringify(testData))
    expect(response.body).not.toBeNull()
    expect(boardingCards[0]).not.toBeNull()
})

test('Check endpoint /api/v1/sorter with no token', async () => {
    const response = await request(app)
        .get(`/api/v1/sorter`)
        .send(JSON.stringify(testData))
        .expect(401);
    
    expect(response.body.error).toEqual('Please authenticate.') 

})

test('Check endpoint /api/v1/sorter with invalid param', async () => {
    const response = await request(app)
        .get(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(404) 

    expect(response.body.error).toEqual('No data found') 
})


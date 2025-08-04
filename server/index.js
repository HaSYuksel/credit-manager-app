// Setting up dependencies and needed Middleware 
const express = require('express');
const app = express();
const PORT = 500;
app.use(express.json());

// localy stored json for the card info
const cards = [
        {
            "id": 1,
            "bank": "Chase",
            "cardname": "Freedom Unlimited",
            "balance": 300.25,
            "limit": 2000,
            "dueDate": "2024-11-15"
        },
        {
            "id": 2,
            "bank": "Capital One",
            "cardname": "Quick Silver",
            "balance": 270,
            "limit": 7000,
            "dueDate": "2029-12-15"
        },
        {
            "id": 3,
            "bank": "paypal",
            "cardname": "mastercard",
            "balance": 3020,
            "limit": 9000,
            "dueDate": "2029-12-15"
        }
    ];

// end point that allows you to
/// GET /cards
app.get('/cards', (req, res) => {
    res.json(cards);
});

// end point that allows you to filter the specific card you want to look at
// GET /cards/:id
app.get('/cards/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const card = cards.find(card => card.id === id);

    if (card) {
        res.json(card);
    } else {
        res.status(404).json({ error: 'Card not Found'});
    }
});

// just for testing purposes it allows you to add new cards
// POST /cards
app.post('/cards', (req, res) => {
    const { bank, cardname, balance, limit, dueDate } = req.body;
    
    if(!bank || !cardname || balance == null || limit == null || !dueDate){
        return res.status(400).json({ error: "Missing equired fields." });
    }

    const newCard = {
        id: cards.length + 1,
        bank,
        cardname,
        balance,
        limit,
        dueDate
    };
    
    cards.push(newCard);
    res.status(201).json(newCard)
});
// GET /summary
// GET /summary?range=monthly
// GET /summary?range=weekly

// GET /recurring
// GET /recurring/:cardId


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
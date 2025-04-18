import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 7776;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/mell', (req,res)=>{
    const mell_gyak = [
        { "name": "Fekvenyomás", "megnyulas": 3, "terhelhetoseg": 5 },
        { "name": "Döntött pados nyomás", "megnyulas": 4, "terhelhetoseg": 3 },
        { "name": "Tárogatás", "megnyulas": 5, "terhelhetoseg": 3 }
    ];
    res.json(mell_gyak);
});
app.get('/hat', (req,res)=>{
    const hat_gyak = [
        { "name": "Lehúzás", "megnyulas": 5, "terhelhetoseg": 5 },
        { "name": "Evezés", "megnyulas": 5, "terhelhetoseg": 4 },
        { "name": "Melltámaszos evezés", "4": 200000, "terhelhetoseg": 5 }
    ];
    res.json(hat_gyak);
});app.get('/lab', (req,res)=>{
    const lab_gyak = [
        { "name": "Gugolás", "megnyulas": 4, "terhelhetoseg": 5 },
        { "name": "Felhúzás", "megnyulas": 4, "terhelhetoseg": 5 },
        { "name": "Comb Feszítő", "megnyulas": 5, "terhelhetoseg": 5 }
    ];
    res.json(lab_gyak);
});
app.get('/caloria', (req,res)=>{
    const caloria = [
        { "name": "Alma","category": "Gyümölcs","portion_size": "1 közepes alma (182g)","calories": 95,"carbs": 25,"protein": 0.5,"fat": 0.3,"fiber": 4.4 },
        { "name": "Banán","category": "Gyümölcs","portion_size": "1 közepes banán (118g)","calories": 105,"carbs": 27,"protein": 1.3,"fat": 0.3,"fiber": 3.1 },
        { "name": "Csirke mell","category": "Hús","portion_size": "100g","calories": 165,"carbs": 0,"protein": 31,"fat": 3.6,"fiber": 0 },
        { "name": "Tojás","category": "Tejtermékek","portion_size": "1 nagy tojás (50g)","calories": 70,"carbs": 1,"protein": 6,"fat": 5,"fiber": 0 },
        { "name": "Avokádó","category": "Zöldség","portion_size": "1 közepes avokádó (150g)","calories": 240,"carbs": 12,"protein": 3,"fat": 22,"fiber": 10 },
        { "name": "Zabpehely","category": "Gabona","portion_size": "1/2 csésze száraz zabpehely (40g)","calories": 150,"carbs": 27,"protein": 5,"fat": 3,"fiber": 4 },
        { "name": "Krémsajt","category": "Tejtermékek","portion_size": "2 evőkanál (30g)","calories": 99,"carbs": 1,"protein": 2,"fat": 10,"fiber": 0 }
    ];
    res.json(caloria);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
const express = require('express');
const app = express();

// GET /rest/admin/pass -> admin/pass 가 파라메터이다.
app.get('/rest/:id/:pw', (req, res) => {
    console.log(req.params)
    // const id = req.params.id;
    const {id, pw} = req.params;
    res.json({
        'msg':'잘 받았음',
        'params':{id, pw}  // params : {id:id, pw:pw}
    });
});

// GET /get_method?id=admin&pw=pass

// POST /login
// {id:"admin", pw:"pass"}

// 위 URL 외의 것이 왔을 때 처리

app.listen(80, () => {console.log('http://localhost')});
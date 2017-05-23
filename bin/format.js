#!/usr/bin/env node

const colors = require('colors');

module.exports = json => {

    const data = JSON.parse(json),
          basic = data.basic ? data.basic : "",
          usPhonetic = basic? (data.basic['us-phonetic'] ? data.basic['us-phonetic'] : "") : "",
          ukPhonetic = basic? (data.basic['uk-phonetic'] ? data.basic['uk-phonetic'] : "") : "",
          pronTitle = usPhonetic && ukPhonetic ? "发音：" : "",
          uspronTitle =  usPhonetic ? '美：': "",
          ukpronTitle =ukPhonetic ? '英：': "", 

          mainTitle = "翻译：",
          translation = data.translation ? data.translation : "",

          web = data.web ? data.web: "",
          webTitle = web ? "网络释义：" : "";
         

    let mainTrans = "",
        webTrans = "",
        template = "";
    
    if(translation) {
        for(let i of translation) {
            mainTrans += `\n\n   ${i.red}`;
        };
    }

    if(basic) {
        for(let i of basic.explains) {
            mainTrans += `\n\n   ${i.green}`;
        }
    }

    if(web) {
        for(let i = 0; i < web.length; i++) {
            webTrans += `\n\n   ${i+1}: ${web[i].key.cyan}\n\n\t${web[i].value.join(',').yellow}`;
        }
    }

    template = `\n${pronTitle.red}\n\n${uspronTitle.green}${usPhonetic}\t${ukpronTitle.green}${ukPhonetic}` + 
                `\n\n${mainTitle.blue}${mainTrans}\n\n${webTitle.blue}${webTrans}`;
    
    console.log(template);

}


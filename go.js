const color = ["#4A7789" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
    const text = ["Ennamaa pannalaam"," Disco-vukku pogalaamy","Where is the party","","Aa unga vootla party","Where is the party", "Aa namma vootla party"];
    
    const title = document.querySelector(".text");
    const bg = document.querySelector(".color");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            {
            title.innerHTML = text[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },300);

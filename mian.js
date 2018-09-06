!function(){
    var duration = 20

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
            duration = 100
            break
            case 'normal':
            duration = 50
            break
            case 'fast':
            duration = 10
            break
        }
    })
    
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1
            container.innerHTML = code.slice(0,n)
            styleTag.innerHTML = code.slice(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(run,duration)
            }else{
                fn && fn.call()

            }
            
        },duration)
    }
    let code = `
    /*
    *先准备一个画板
    */
    .preview{
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        border: 1px solid green;
        background: #fee433;
      }
      .wrapper{
        width:100%;
        height: 165px;
        position: relative;
      }
      /*
      *画一个鼻子
      */
      .nose{
        width: 0;
        height: 0;
        border: 15px solid red;
        border-color: black transparent transparent;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
      }
      /*
      *画双眼
      */
      .eye{
        width: 50px;
        height: 50px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
      }
      .eye::after{
        content:'';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        border: 2px solid #000;
        top: -2px;
      }
      .eye.left{
        right: 50%;
        margin-right: 90px;
      }
       .eye.right{
        left: 50%;
        margin-left: 90px;
      }
      /*
      *画脸
      */
      .face{
        width: 68px;
        height: 68px;
        background: red;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
      }
      .face.left{
        right: 50%;
        margin-right: 116px;
      }
      .face.right{
        left: 50%;
        margin-left: 116px;
      }
      /*
      *画上嘴唇
      */
      .upperLip{
        height: 25px;
        width: 80px;
        border: 3px solid black;  
        position: absolute;
        background: #fee433;
        top: 50px;
      }
      .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-25deg);
      }
      .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(25deg);
      }
      /*
      *画下嘴唇
      */
      .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 108px;
        width: 300px;
        overflow: hidden;
      }
      .lowerLip{
        width: 300px;
        height: 3500px;
        border: 2px solid black;
        border-radius: 200px/2000px;
        background: #990513;
        position: absolute;
        bottom: 0;
        overflow: hidden;
      }
      /*
      *画舌头
      */
      .lowerLip::before{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
      }
    
      /*
      *皮卡丘画完了
      */
    `
    writeCode('',code)


}.call()
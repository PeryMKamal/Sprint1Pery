
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
       
        
        <div class="tp-wrapper11">
            <div class="tp-box11" (click)="toggleFlip11()" [@flipState]="flip11">
                <div class="tp-box__side11 tp-box__front11">
                    <img src="https://drive.google.com/uc?id=1Xg1sfu1tw45o-CgnHb05KxWTjewLViVo" style="margin:auto; width:200px;height: 200px;display:block" />
                </div>
                <div class="tp-box__side11 tp-box__back11">
                    <font size="2">Perihan Mohamed</font>
                    <br/>
                    <font size="2">I want to quit Engineering</font>
                </div>
            </div>
        </div>
        
       
    `,
    styles: [
        `
    .tp-wrapper {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 3rem auto;
      transform-style: preserve-3d;
      transition: transform 1s;
    }
    .tp-box__side {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 2px;
      font-weight: 700;
      cursor: pointer;
      user-select: none;
    }
    .tp-box__front {
      background: #f30d36;
    }
    .tp-box__back {
      background: #23262d;
      transform: rotateY(179.9deg);
    }
    .tp-wrapper1 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
        }
    .tp-box1 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side1 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front1 {
        background: #f30d36;
    }
    .tp-box__back1 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper2 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box2 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side2 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front2 {
        background: #f30d36;
    }
    .tp-box__back2 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper3 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box3 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side3 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front3 {
        background: #f30d36;
    }
    .tp-box__back3 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper4 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box4 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side4 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front4 {
        background: #f30d36;
    }
    .tp-box__back4 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper5 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box5 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side5 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front5 {
        background: #f30d36;
    }
    .tp-box__back5 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper6 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box6 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side6 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front6 {
        background: #f30d36;
    }
    .tp-box__back6 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper7 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box7 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side7 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front7 {
        background: #f30d36;
    }
    .tp-box__back7 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper8 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box8 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side8 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front8 {
        background: #f30d36;
    }
    .tp-box__back8 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper9 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box9 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side9 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front9 {
        background: #f30d36;
    }
    .tp-box__back9 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper10 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box10 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side10 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front10 {
        background: #f30d36;
    }
    .tp-box__back10 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper11 {
        position: relative;
        left: 4.5%;
        width:  16%;
        perspective: 800px;
    }
    .tp-box11 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side11 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front11 {
        background: #f30d36;
    }
    .tp-box__back11 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper12 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box12 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side12 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front12 {
        background: #f30d36;
    }
    .tp-box__back12 {
        background: #23262d;
        transform: rotateY(179.9deg);

    }




    .tp-wrapper13 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box13 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side13 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front13 {
        background: #f30d36;
    }
    .tp-box__back13 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }



    .tp-wrapper14 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box14 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side14 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front14 {
        background: #f30d36;
    }
    .tp-box__back14 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }


    .tp-wrapper15 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box15 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side15 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front15 {
        background: #f30d36;
    }
    .tp-box__back15 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper16 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box16 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side16 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front16 {
        background: #f30d36;
    }
    .tp-box__back16 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper17 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box17 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side17 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front17 {
        background: #f30d36;
    }
    .tp-box__back17 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper18 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box18 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side18 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front18 {
        background: #f30d36;
    }
    .tp-box__back18 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper19 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box19 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side19 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front19 {
        background: #f30d36;
    }
    .tp-box__back19 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper20 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box20 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side20 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front20 {
        background: #f30d36;
    }
    .tp-box__back20 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper21 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box21 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side21 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front21 {
        background: #f30d36;
    }
    .tp-box__back21 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper22 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box22 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side22 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front22 {
        background: #f30d36;
    }
    .tp-box__back22 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper23 {
        position: relative;
        top: -2975px;
        left:58%;
        width:16%;
        perspective: 800px;
    }
    .tp-box23 {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side23 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front23 {
        background: #f30d36;
    }
    .tp-box__back23 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }
    .tp-wrapper24 {
        position: relative;
        right: -10px;
        top: -3000px;
    }
    .tp-box24 {
        position: relative;
        width: 1200px;
        height: 300px;
        margin: 3rem auto;
        transform-style: preserve-3d;
        transition: transform 1s;
    }
    .tp-box__side24 {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        text-align: center;
        line-height: 40px;
        font-size: 2px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
    }
    .tp-box__front24 {
    }
    .tp-box__back24 {
        background: #23262d;
        transform: rotateY(179.9deg);
    }



    .rotateimg180 {
        -webkit-transform:rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    `
    ],
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(179.9deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class AboutComponent {


    flip11: string = 'inactive';
    


    constructor() {}

   
    toggleFlip11() {
        this.flip11 = (this.flip11 == 'inactive') ? 'active' : 'inactive';
    }
   




}

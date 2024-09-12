/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Haley Mason 
      Date:   

      Filename: project03-02.js
*/

let captions = new Array(14);
captions[0]="Bengal Cat Breed";
captions[1]="Birman Cat Breed";
captions[2]="Japanese Bobtail Cat Breed"; 
captions[3]="Maine Coon Cat Breed"; 
captions[4]="LaPerm Cat Breed"; 
captions[5]="Oriental Cat Breed";
captions[6]="Scottish Fold Cat Breed";
captions[7]="Russian Blue Cat Breed";
captions[8]="Toyger Cat Breed";
captions[9]="Siamese Cat Breed";
captions[10]="Tonkinese Cat Breed";
captions[11]="Bombay Cat Breed";
captions[12]="Himalayan Cat Breed";
captions[13]="Ragamuffin Cat Breed";

let htmlCode = '';

for (let i = 0; i < captions.length; i++) {htmlCode += 
`<figure>
    <img alt='' src='slide${i}.jpg' />
    <figcaption>${captions[i]}</figcaption>
</figure>`;}

document.getElementById('gallery').innerHTML = htmlCode;
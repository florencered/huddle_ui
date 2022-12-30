import { createGlobalStyle } from "styled-components";  
//for styling components or tags as a whole
const GlobalStyles = createGlobalStyle` 
*{
    box-sizing:border-box
}
 body{
    background:${({theme})=>theme.colors.body}; 
    color:hsl(192,100%,9%); 
    font-family:"poppins",sans-serif; 
    font-size:1.15rem;
 } 
 p{
    opacity:0.6; 
    line-height:1.5;
 }
` 
//exporting the globalstyles
export default GlobalStyles;
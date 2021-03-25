import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA=()=>
{
    const[num,setNum]=useState('num');
    const[name,setNames]=useState();
    const[moves,setMoves]=useState();


    useEffect(()=>{
        async function getData(){ //define function 
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data);
            setNames(res.data.name)
            setMoves(res.data.moves.length)
        }
        getData();
       // alert("hi");
    });
   

 return (
     <>
     <div>
         <h1>You Choose <span style={{color:"red"}}> {num} </span> Vlaue</h1>
         <h1>Name <span style={{color:"red"}}>{name}</span> Vlaue</h1>
         <h1>Move <span style={{color:"red"}}>{moves}</span> Vlaue</h1>
        <select value={num} 
        onChange={(e)=>{
        setNum(e.target.value)
        }}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>

     </div>
     </>
 );

}
export default ComA;
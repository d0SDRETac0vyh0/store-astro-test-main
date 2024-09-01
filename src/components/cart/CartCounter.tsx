import { itemsInCart } from '@/store';
import {useStore} from '@nanostores/react'
import { useEffect } from 'react';
import { CartCookiesClient } from '@/utils';

export const CartCounter=()=>{

    

      return (
        <a href="" className="relative inline-block snipcart-checkout">


    <svg xmlns="http://www.w3.org/2000/svg" 
            width="2em" 
            height="2em" 
            viewBox="0 0 512 512"><path 
            fill="#ffffff" d="M160 96.039v32h304v63.345l-35.5 112.655H149.932L109.932 16H16v32h66.068l40 288.039h329.9L496 196.306V96.039zm16.984 272.305a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.04 32.04 0 0 1-32 32m224-96a64.073 64.073 0 0 0-64 64a64 64 0 0 0 128 0a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.04 32.04 0 0 1-32 32"></path></svg>
        </a>
      );
    };



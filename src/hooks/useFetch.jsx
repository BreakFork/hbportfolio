import { useState, useEffect } from "react";

/**
 * 
 * @param {string} url
 */
async function useFetch(url) {
    const response = await fetch(url);
    const result = await response.json();
    let data ;
    return data = result
}

export default useFetch;
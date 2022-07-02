export const getGifs = async(category) => {
    const API_KEY = `fzVP4gNG0yghFvbOwsvGa12p1CC0lvvR`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=es`
  
    const resp = await fetch(url);
  
    const { data } = await resp.json(); //destructurar data para solo recibir esta
  
    const gifs = data.map(img=> (
      {
        id: img.id,
        title: img.title,
        url: img.images.original.url
      }
    ))
  
    console.log(gifs);
    return gifs;
  }
  
const containMovie = document.querySelector('.movie')
let data = ''
 async function movieMain(){
    let api =`https://api.themoviedb.org/3/trending/all/day?api_key=21a74c685cbdafbea65d58ebd993168f`
     data = await fetch(api).then(res=>res.json())
    const dataMovie = data.results;
   const currentPathname = location.pathname
   console.log(currentPathname)
    console.log(dataMovie)
        for(let i=0;i<dataMovie.length;i++)
                {
                    if(dataMovie[i].title == undefined)
                    {
                        dataMovie[i].title = dataMovie[i].name
                    }
                    if(dataMovie[i].release_date == undefined)
                    {

                        dataMovie[i].release_date = dataMovie[i].first_air_date
                    }
                    
                }
                
    const render = (
        <div className ="row">
                {
                    dataMovie.map((item,index)=>
                        
                        <div className = "col l-3 m-3 c-4" key ={item.id}>
                            <div className = "card">
                                <div>
                                    <a href="./play-page.html">
                                        <img src="https://image.tmdb.org/t/p/w500/"/>
                                    </a>
                                    
                                </div>     
                                <h1>{dataMovie[index].title}</h1>
                                <small>{item.release_date}</small>
                            </div>
                        </div>
                        )
                }
            </div>
    )
    
        if(currentPathname == '/movie/home.html')
        {
             ReactDOM.render(render, containMovie)
        }
            
   
                const getSrcs = document.querySelectorAll('.card img');
                
                
                 getSrcs.forEach((getSrc,index)=>
                    {
                        const srcImg =  getSrc.getAttribute("src")+ dataMovie[index].poster_path                      
                        getSrc.setAttribute("src",srcImg)
   
                    })
                    if(location.pathname == '/movie/home.html')
                    { 
                         ReactDOM.render(render, containMovie)
                    }
                    
                    
                          
                let currentIndex =0;
                for(let i=0; i<getSrcs.length ;i++)
                {
                    getSrcs[i].addEventListener('click',()=>{
                        getSrcs
                       
                    })
                    
                }
                  if(location.pathname == '/movie/play-page.html')
                     {  
                                const containPlayPage = document.querySelector('.play-page') 
                                console.log(containPlayPage)
                     } 
                  
                
        
}
movieMain()

   





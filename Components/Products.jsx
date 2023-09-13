import React, { useEffect , useState } from 'react'


const Products = () => {

	const [products , setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const fetchproduct = async() =>{
		const data = await fetch('https://dummyjson.com/products')
		const products = await data.json()
		setProducts(products.products
			)
		console.log(products)

	}

	useEffect(()=>{

		fetchproduct()
	} , []);

	const nextpage = () =>{
		if(products.length / 10 > page)
			setPage(page + 1)

	}
	const previouspage = () =>{
		if(page > 1){
			setPage(page - 1)
		}
	}
	const pagenextprev = (page) =>{
		setPage(page)
	}

  return (
	<>

		<div >
		{products.slice(page * 10 -10 , page * 10).map((product,key) => {
			return(
				<div className="card" style={{display:"flex" ,width: "18rem" , height:"auto"}} key = {product.id}>
				  <img src={product.images[0]} className="card-img-top" alt="..." />
				  <div className="card-body">
				    <h5 className="card-title">{product.title}</h5>
				    <p className="card-text">{product.description}</p>
				    <a href="#" className="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
				)
		})}
			<button onClick={previouspage}>Previous</button>

			{ [...Array(products.length / 10 )].map((_,i)=>{
				return <button key={i} onClick ={ () =>{ pagenextprev(i+1)}}>{i+1}</button>
			})

			}

			<button onClick={nextpage}>Next</button>
			</div>

	</>
  )
}

export default Products;
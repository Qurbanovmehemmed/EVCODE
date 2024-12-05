import React from 'react'

const Home = () => {
  return (
    <div>
      <section>
            <img src="./src/assets/image/1.jpg.webp" alt="" style={{width:"100%",height:"900px",position:"relative"}} />
        <div className="container">
           <div className="text" style={{position:"absolute",top:"50%",width:"700px"}}>
           <h1>The hearth of the farm is the true center of our universe.</h1>
            <p>Mauris vestibulum dolor nec lacinia facilisis. Fusce interdum sagittis volutpat. Praesent eget varius ligula, malesuada eleifend purus. Aenean euismod est at mauris mollis ultricies.
                  Morbi arcu mi, dictum eu luala, dapibus
                  interdum mollis.</p>
                   <button >Contact Us</button></div> 
        </div>
      </section>
    </div>
  )
}

export default Home

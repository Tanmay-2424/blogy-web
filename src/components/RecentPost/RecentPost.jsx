import React from "react";
import Styles from "./RecentPost.module.css";

function RecentPost() {
  const recentpost = [
    { 
      img: "https://media.istockphoto.com/id/638495482/photo/reaching-images-streaming.jpg?s=1024x1024&w=is&k=20&c=KsXj7eJpqCZpXLYtb-aCh1uF78QR0Pgol8ekA0N95sA=",
      title: "New technology is not good or evil in and of itself",
      // description:
        // "Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor.",
      buttons: ["Design", "Idea", "Review"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://images.unsplash.com/photo-1578592308652-794769149ab0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "It’s a new era in design, there are no rules",
      // description:
        // "Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis",
      buttons: ["Creative", "Product"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://images.unsplash.com/photo-1583932334951-9a74f88ea6aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Perfection has to do with the end product",
      // description:
        // "Aenean eget urna aliquet, viverra orci quis, aliquam erat. Ut rutrum quam quam, eu eleifend est blandit et. Vivamus",
      buttons: ["Design", "Creative", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://media.istockphoto.com/id/471354358/photo/wall-of-triangles.jpg?s=1024x1024&w=is&k=20&c=zzj_OFNGXmez2LU63IicnpaWljRSGL_YmozTf9LJX0Q=",
      title: "Everyone has a different life story",
      // description:
        // "Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium. Nunc vero a",
      buttons: ["People", "Story"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-3.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-5.jpg",
      title: "The difference is quality",
      // description:
        // "Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit. Atque his de rebus et splendida est eorum et illustris oratio.",
      buttons: ["Design", "Lifestyle", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-6.jpg",
      title: "Problems are not stop signs, they are guidelines",
      // description:
        // "Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae.",
      buttons: ["Idea", "Creating"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    }
  ];

  return (
    <>
      <div className={Styles.title}>
        Get started with our <strong>recent posts</strong>
      </div>

      <div className={Styles.container}>
        {recentpost.map((recentpost, index) => (
          <div className={Styles.recentCard} key={index}>
            <div className={Styles.imageContainer}>
              <img src={recentpost.img} alt={`Story ${index + 1}`} />
              <div className={Styles.logo}>
                <img src={recentpost.logo} alt={`Logo ${index + 1}`} />
              </div>
            </div>
            <div className={Styles.buttonContainer}>
              {recentpost.buttons.map((button, btnIndex) => (
                <button key={btnIndex} className={Styles.button}>
                  {button}
                </button>
              ))}
            </div>
            <h3>{recentpost.title}</h3>
            <p>{recentpost.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecentPost;

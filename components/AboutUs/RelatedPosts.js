"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const RelatedPosts = () => {
  const posts = [
    {
      title: "The LGBTQ+ homeownership story in numbers",
      description: "The fight against LGBTQ+ housing discrimination has turned a corner. Learn your rights and opportunities in the housing market.",
      link: "#"
    },
    {
      title: "Vishal Garg, Founder and CEO of Better",
      description: "Better.com CEO Vishal Garg has been interested in tech and lending for decades. Learn about his vision for the company.",
      link: "#"
    },
    {
      title: "The Year of the Home: 2020 in Review",
      description: "In the socially distanced world of 2020, Better helped 88,100+ new clients achieve homeownership against all odds.",
      link: "#"
    },
    {
      title: "Why I Started Better Mortgage",
      description: "Most founders have a story they pitch when asked about their company's origin. Here's the real story behind Better.",
      link: "#"
    },
    {
      title: "Bringing it home: 2019 in review",
      description: "2019 was a transformative year for Better Mortgage and our homeowners. Here's a look at what we accomplished together.",
      link: "#"
    },
    {
      title: "Finding Home: Taisha's Story",
      description: "A doctor and single parent navigates debt and divorce to find stability through homeownership.",
      link: "#"
    },
    {
      title: "Finding Home: Dan and Louise",
      description: "They didn't think homeownership was possible. Now they're living their dream in a home they love.",
      link: "#"
    },
    {
      title: "HELOC Processing Times Explained",
      description: "Discover how long it takes to get a HELOC and learn how to speed up the approval process.",
      link: "#"
    },
    {
      title: "Mortgages for Self-Employed Borrowers",
      description: "Special considerations and strategies for self-employed individuals seeking mortgage approval.",
      link: "#"
    }
  ];

  return (
    <section style={{backgroundColor:"#f0f7f1",color:"black",padding:"90px 375px"}}>
      <div className="container">
        <h3 className="mb-4" style={{fontWeight:"700"}}>Related posts</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((post, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm hover-shadow-lg transition-shadow" style={{height:"183",width:"177",padding:"18px"}}>
                <div className="card-body">
                  <h3 className="card-title" style={{fontSize:"18px",fontWeight:"700"}}>{post.title}</h3>
                  <p className="card-text"  style={{fontSize:"12px",opacity:"0.7",fontWeight:"500"}} >{post.description}</p>
                  <a href={post.link} className="text-success text-decoration-none">
                    Read now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
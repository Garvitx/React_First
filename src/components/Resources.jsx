import React, { useState, useEffect } from 'react';
import './Resources.css';

const ResourceCard = ({ resource }) => (
  <div className="resource-card about-box">
    <h3>{resource.title}</h3>
    <p>{resource.description}</p>
    <a href={resource.link} target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </div>
);

const Resources = () => {
  // Manually enter your resource objects in this array
  const manualResources = [
    {
      title: 'Resource 1',
      description: 'Description for Resource 1',
      link: 'https://example.com/resource1',
    },
    {
      title: 'Resource 2',
      description: 'Description for Resource 2',
      link: 'https://example.com/resource2',
    },
    {
      title: 'Resource 3',
      description: 'Description for Resource 3',
      link: 'https://example.com/resource3',
    },
    {
      title: 'Resource 4',
      description: 'Description for Resource 4',
      link: 'https://example.com/resource4',
    },
    {
      title: 'Resource 5',
      description: 'Description for Resource 5',
      link: 'https://example.com/resource5',
    },
    {
      title: 'Resource 6',
      description: 'Description for Resource 6',
      link: 'https://example.com/resource6',
    },
    {
      title: 'Resource 7',
      description: 'Description for Resource 7',
      link: 'https://example.com/resource7',
    },
    {
      title: 'Resource 8',
      description: 'Description for Resource 8',
      link: 'https://example.com/resource8',
    },
    {
      title: 'Resource 9',
      description: 'Description for Resource 9',
      link: 'https://example.com/resource9',
    },
    {
      title: 'Resource 10',
      description: 'Description for Resource 10',
      link: 'https://example.com/resource10',
    },
    {
      title: 'Resource 11',
      description: 'Description for Resource 11',
      link: 'https://example.com/resource11',
    },
    {
      title: 'Resource 12',
      description: 'Description for Resource 12',
      link: 'https://example.com/resource12',
    },
    {
      title: 'Resource 13',
      description: 'Description for Resource 13',
      link: 'https://example.com/resource13',
    },
    {
      title: 'Resource 14',
      description: 'Description for Resource 14',
      link: 'https://example.com/resource14',
    },
    {
      title: 'Resource 15',
      description: 'Description for Resource 15',
      link: 'https://example.com/resource15',
    },
    {
      title: 'Resource 16',
      description: 'Description for Resource 16',
      link: 'https://example.com/resource16',
    },
    // You can continue to add more unique resource objects as needed
  ];
  

  const [resources, setResources] = useState(manualResources);
  const [visibleResources, setVisibleResources] = useState([]);
  const [loadCount, setLoadCount] = useState(9); // Set the initial loadCount to 15

  useEffect(() => {
    // Update the visible resources based on loadCount
    setVisibleResources(resources.slice(0, loadCount));
  }, [resources, loadCount]);

  const handleLoadMore = () => {
    // Load the next 15 resources
    setLoadCount(loadCount + 9);
  };

  return (
    <div className="home-container">
      <div className="sign resources-heading">
        <span className="fast-flicker">R</span>
        <span className="flicker">E</span>
        <span className="fast-flicker">S</span>
        <span className="flicker">O</span>
        <span className="fast-flicker">U</span>
        <span className="flicker">R</span>
        <span className="fast-flicker">C</span>
        <span className="flicker">E</span>
        <span className="fast-flicker">S</span>
      </div>
      <div className="resources-container">
        <div className="sign resources-heading">
          <span className="fast-flicker">R</span>
          <span className="flicker">E</span>
          <span className="fast-flicker">S</span>
          <span className="flicker">O</span>
          <span className="fast-flicker">U</span>
          <span className="flicker">R</span>
          <span className="fast-flicker">C</span>
          <span className="flicker">E</span>
          <span className="fast-flicker">S</span>
        </div>
        <div className="resource-list ">
          {visibleResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
        {loadCount < resources.length && (
          <button className="button" onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Resources;

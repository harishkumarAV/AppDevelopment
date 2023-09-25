import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchJobPage.css';

function SearchJobPage() {
  const jobPostings = useSelector((state) => state.Searchjob.jobs);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = jobPostings.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className='hero'>
        <h2 className="hero-head">Get Hired, Get Inspired!</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="job-list">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div className="job" key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="st" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/JobForm`}>Easy apply!</Link>
              </div>
            ))
          ) : (
            jobPostings.map((product) => (
              <div className="job" key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="st" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/JobForm`}>Easy apply!</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchJobPage;

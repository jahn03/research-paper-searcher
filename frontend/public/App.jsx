import React, { useState } from 'react';
import SearchBar from './src/components/SearchBar';
import ResultList from '.src/components/ResultList';
import axios from 'axios'

function App() {

    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState([false]);

    const handleSearch = async (inputData) => {
        setLoading = true;
        try { 
            const response = await axios.post('http://localJost:5000/recommend', inputData);
            setPapers(response.data.papers)
        } catch (error) {
            console.error("Error fetching recommendations", error);
            setPapers([]);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Research Paper Recommender</h1>
            <SearchBar onSearch={handleSearch} />
            {loading ? <p>Loading...</p> : <ResultList papers={papers} />}
        </div>
    );
}

export default App;
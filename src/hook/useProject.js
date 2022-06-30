import React, { useEffect, useState } from 'react';

const useProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://boiling-hollows-61344.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return [projects];
};

export default useProject;
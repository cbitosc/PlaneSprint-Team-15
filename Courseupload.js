import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';

function Courseupload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [orgname, setOrgname] = useState('');
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        console.log(e.target.value)
    };
    // const handleOrgname = (e) => {
    //     setOrgname(e.target.value);
    //     console.log(e.target.value)
    // };

    const handleFileChange = (e) => {
        setSelectedVideos(e.target.files);
        console.log(e.target.files);
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        if (!title || !description || selectedVideos.length === 0) {
          return;
        }
    
        const courseData = {
          title,
          description
        };
      
          try {
            setUploading(true);
            const response = await axios.post('http://localhost:8000/courses', courseData);
            console.log(response.data);
            setTitle('');
            setDescription('');
            // setOrgname('');
            setSelectedVideos([]);
            setUploading(false);
        } catch (error) {
            console.log(error);
            setUploading(false);
          }
          // console.log(formData);
        };

  return (
    <div>
      <Navbar/>
        <form onSubmit={handleFormSubmit}>

        <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Name</span>
        <input type="text" class="form-control" value={title} onChange={handleTitleChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">description</span>
        <input type="text" class="form-control" value={description} onChange={handleDescriptionChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        {/* <div class="input-group input-group-lg">
        <span class="input-group-text" id="inputGroup-sizing-lg">Organisation name</span>
        <input type="text" class="form-control" value={orgname} onChange={handleOrgname} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div> */}
        <div>
          <label>Videos:</label>
          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <div>
          <button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
        </form>


    </div>
  )
}

export default Courseupload
import React, { useState, useEffect } from 'react';
import useSWR, { mutate } from 'swr';
import { Link } from 'react-router-dom';
import { dataAPI } from '../services/api';
import RequireAdmin from '../components/RequireAdmin';

const Update = () => {
  const [speakers, setSpeakers] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [allData, setAllData] = useState(null);

  // Default speakers data
  const defaultSpeakers = [
    {
      id: 1,
      name: 'Vlad Magdalin',
      title: 'Keynote Speaker',
      bio: "Our founding Webflow father. Our dad joke aficionado. He puts the mad into Magdalin and will be kicking off FlowFest '25 as our keynote speaker!",
      image: '/images/speakers/vlad.jpg'
    },
    {
      id: 2,
      name: 'Ilja van Eck',
      title: 'Development Expert',
      bio: "Oh 'Eck, we've only gone and secured the web wizard himself. Co-founder of Osmo & Webflow superstar, we can't wait to learn from Ilja!",
      image: '/images/speakers/ilja.jpg'
    },
    {
      id: 3,
      name: 'Cassie Evans',
      title: 'Animation Specialist',
      bio: "Our GSAP fairy codemother is here to sprinkle some tween magic, animation goodness & Webflow's deepest darkest secrets now she's on the inside.",
      image: '/images/speakers/cassie.jpg'
    },
    {
      id: 4,
      name: 'Stephanie Bruce',
      title: 'Design Expert',
      bio: "Devs want to work with her, designers want to be her. Steph has hit the ground running with her stunning web work and will be sharing her expert freelancer growth tips.",
      image: '/images/speakers/stephanie.jpg'
    },
    {
      id: 5,
      name: 'Ross Plaskow',
      title: 'Animation Director',
      bio: "We've all wanted to animate something cool with Rive, and Ross is here to show us how with his ridiculously fun and slick style.",
      image: '/images/speakers/ross.jpg'
    }
  ];

  const { data: contentData, error } = useSWR('/api/github', dataAPI.get);

  useEffect(() => {
    if (contentData && contentData.content) {
      setAllData(contentData.content);
      setSpeakers(contentData.content.speakers || defaultSpeakers);
    } else if (!contentData && !error) {
      // Still loading, don't set default yet
    } else {
      // No data found or error, use default
      setSpeakers(defaultSpeakers);
    }
  }, [contentData, error]);

  const handleChange = (index, field, value) => {
    const newSpeakers = [...speakers];
    newSpeakers[index][field] = value;
    setSpeakers(newSpeakers);
  };

  const handleBgColorChange = (index, color) => {
    const newSpeakers = [...speakers];
    newSpeakers[index].bgColor = color;
    setSpeakers(newSpeakers);
  };

  const handleImagePositionChange = (index, position) => {
    const newSpeakers = [...speakers];
    newSpeakers[index].imgStyle = { objectPosition: position };
    setSpeakers(newSpeakers);
  };

  const handleSubmit = async () => {
    setIsSaving(true);
    try {
      const updatedContent = {
        ...allData,
        speakers: speakers
      };

      await dataAPI.update(updatedContent, 'Update speakers via admin panel');

      // Revalidate the cache
      mutate('/api/github');
      alert('Speakers updated successfully! The changes have been pushed to GitHub and will be live on your site.');
    } catch (error) {
      console.error('Error updating speakers:', error);
      alert(`There was an error updating the speakers: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const addNewSpeaker = () => {
    const newSpeaker = {
      name: 'New Speaker',
      category: 'Category',
      description: 'Add speaker description here...',
      bgColor: 'bg-blue-400',
      imgStyle: { objectPosition: '50% 50%' }
    };
    setSpeakers([...speakers, newSpeaker]);
  };

  const removeSpeaker = (index) => {
    const newSpeakers = speakers.filter((_, i) => i !== index);
    setSpeakers(newSpeakers);
  };

  const resetToDefault = async () => {
    if (confirm('Are you sure you want to reset all speakers to default? This action cannot be undone.')) {
      setSpeakers(defaultSpeakers);
      try {
        await dataAPI.delete('speakers');
        mutate('/api/data?key=speakers');
      } catch (error) {
        // If key doesn't exist, that's fine - we just wanted to reset anyway
        console.log('No existing data to delete, using defaults');
      }
    }
  };

  const bgColorOptions = [
    { name: 'Yellow', value: 'bg-yellow-400' },
    { name: 'Orange', value: 'bg-orange-400' },
    { name: 'Pink', value: 'bg-pink-400' },
    { name: 'Blue', value: 'bg-blue-400' },
    { name: 'Green', value: 'bg-green-400' },
    { name: 'Purple', value: 'bg-purple-400' },
    { name: 'Red', value: 'bg-red-400' }
  ];

  const imagePositionOptions = [
    { name: 'Top Left', value: '25% 15%' },
    { name: 'Top Center', value: '50% 15%' },
    { name: 'Top Right', value: '75% 15%' },
    { name: 'Center Left', value: '25% 50%' },
    { name: 'Center', value: '50% 50%' },
    { name: 'Center Right', value: '75% 50%' },
    { name: 'Bottom Left', value: '25% 80%' },
    { name: 'Bottom Center', value: '50% 80%' },
    { name: 'Bottom Right', value: '75% 80%' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9] py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-extrabold text-black tracking-tighter">Update Speakers</h1>
            <Link 
              to="/" 
              className="bg-gray-200 text-black font-bold py-2 px-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
          <p className="text-lg text-gray-600">Customize the speaker cards that appear on the Activities section of your website.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={addNewSpeaker}
            className="bg-green-400 text-black font-bold py-2 px-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            Add New Speaker
          </button>
          <button 
            onClick={resetToDefault}
            className="bg-red-400 text-white font-bold py-2 px-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
          >
            Reset to Default
          </button>
        </div>

        {/* Speaker Forms */}
        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-2xl p-6 shadow-[8px_8px_0px_#000]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-black">Speaker {index + 1}</h3>
                {speakers.length > 1 && (
                  <button 
                    onClick={() => removeSpeaker(index)}
                    className="bg-red-500 text-white font-bold py-1 px-3 rounded-lg border-2 border-black hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Speaker Name</label>
                    <input 
                      type="text" 
                      value={speaker.name} 
                      onChange={(e) => handleChange(index, 'name', e.target.value)} 
                      className="w-full p-3 border-2 border-black rounded-lg font-medium"
                      placeholder="Enter speaker name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Category</label>
                    <input 
                      type="text" 
                      value={speaker.category} 
                      onChange={(e) => handleChange(index, 'category', e.target.value)} 
                      className="w-full p-3 border-2 border-black rounded-lg font-medium"
                      placeholder="e.g., Keynote, Development, Design"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Background Color</label>
                    <select 
                      value={speaker.bgColor} 
                      onChange={(e) => handleBgColorChange(index, e.target.value)}
                      className="w-full p-3 border-2 border-black rounded-lg font-medium"
                    >
                      {bgColorOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Image Position</label>
                    <select 
                      value={speaker.imgStyle.objectPosition} 
                      onChange={(e) => handleImagePositionChange(index, e.target.value)}
                      className="w-full p-3 border-2 border-black rounded-lg font-medium"
                    >
                      {imagePositionOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Right Column */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Description</label>
                  <textarea 
                    value={speaker.description} 
                    onChange={(e) => handleChange(index, 'description', e.target.value)} 
                    className="w-full h-48 p-3 border-2 border-black rounded-lg font-medium resize-none"
                    placeholder="Enter speaker description..."
                  />
                </div>
              </div>
              
              {/* Preview */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                <p className="text-sm font-bold text-gray-600 mb-2">Preview:</p>
                <div className="text-sm text-gray-700">
                  <span className={`inline-block px-2 py-1 rounded text-white ${speaker.bgColor} mr-2`}>
                    {speaker.category}
                  </span>
                  <span className="font-bold">{speaker.name}</span>
                  <p className="mt-2 text-xs">{speaker.description.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={handleSubmit}
            disabled={isSaving}
            className={`${
              isSaving ? 'bg-gray-400' : 'bg-pink-400'
            } text-black font-bold text-xl py-4 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 disabled:hover:shadow-[4px_4px_0px_#000] disabled:hover:translate-x-0 disabled:hover:translate-y-0`}
          >
            {isSaving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequireAdmin(Update);

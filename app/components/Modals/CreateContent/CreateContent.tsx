'use client';

import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { useGlobalState } from '@/app/context/globalProvider';
import { plus } from '@/app/utils/Icons';
import Button from '../../Button/Button';

import { CreateContentWrapper } from './CreateContent.styled';

const CreateContent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const { theme, allTasks, closeModal } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'completed':
        setCompleted(e.target.checked);
        break;
      case 'important':
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = { title, description, date, completed, important };
    console.log(task);

    try {
      const res = await axios.post('/api/tasks', task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      if (!res.data.error) {
        toast.success('Task created successfully');
        allTasks();
        closeModal();
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.log(error);
    }
  };

  return (
    <CreateContentWrapper onSubmit={handleSubmit} theme={theme}>
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange('title')}
          placeholder="Enter title"
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          name="description"
          onChange={handleChange('description')}
          placeholder="Enter description"
          rows={4}
        />
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={date} name="date" onChange={handleChange('date')} />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">Toggle completed</label>
        <input
          type="checkbox"
          id="completed"
          value={completed.toString()}
          name="completed"
          onChange={handleChange('completed')}
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Toggle important</label>
        <input
          type="checkbox"
          id="important"
          value={important.toString()}
          name="important"
          onChange={handleChange('important')}
        />
      </div>

      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          name="Create Task"
          icon={plus}
          padding={'0.8rem 2rem'}
          borderRad={'0.8rem'}
          fw={'500'}
          fs={'1.2rem'}
          background={'rgba(0, 163, 255)'}
        />
      </div>
    </CreateContentWrapper>
  );
};

export default CreateContent;

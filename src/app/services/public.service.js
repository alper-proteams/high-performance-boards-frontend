const API_URL = 'https://highperformanceboards.proteams.com/api';

const postForm = async (data) => {
  const res = await fetch(`${API_URL}/contact-forms`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

const PublicService = {
  postForm,
};

export default PublicService;

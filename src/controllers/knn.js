import * as knnService from '../services/knnService';

const getData = async (req, res) => {
  try {
    const { features, k } = req.body;
    const result = knnService.knn(features, k);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getData };

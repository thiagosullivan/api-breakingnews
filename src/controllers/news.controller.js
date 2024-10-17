import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const {authorization} = req.headers
    

    if(!authorization) {
      return res.send(401)
    }

    const parts = authorization.split(" ");
    const [schema, token] = parts

    if(parts.length !== 2){
      return res.send(401)
    }

    if(schema !== 'Bearer'){
      return res.send(401)
    }
    
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    }

    await createService({
      title,
      text,
      banner,
      user: { _id: "670dee40b44570fe1861fb56" },
    });

    res.send(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAll = async (req, res) => {
  const news = await findAllService();

  if (news.length === 0) {
    return res.status(400).send({ message: "There are no registered news" });
  }

  res.send(news);
};

export { create, findAll };

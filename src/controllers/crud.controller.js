
const getAllpro = (model) => async (req, res) => {
  // console.log("1")
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 5;
    const skip = (page - 1) * size;
    const items = await model.find().skip(skip).limit(size).lean().exec();
    
    return res.status(201).send( items );
     
  
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.render('product.ejs', {
      items: items,
 });
   
  
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

  const post = (model) => async (req, res) => {
    try {
      const item = await model.create(req.body);
  
      return res.status(201).send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const getOne = (model) => async (req, res) => {
    try {
      const item = await model.findById(req.params.id).lean().exec();
  
      return res.status(200).send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const updateOne = (model, page) => async (req, res) => {
    try {
      await model
        .findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
        .lean()
        .exec();
  
      const items = await model.find().lean().exec();
      // return res.status(200).send(item);
  
      return res.render(page, { items: items });
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  const deleteOne = (model) => async (req, res) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };
  
  module.exports = (model, page = null) => ({
    get: getAll(model, page),
    getpro:getAllpro(model,page),
    post: post(model),
    getOne: getOne(model),
    updateOne: updateOne(model, page),
    deleteOne: deleteOne(model),
  });
  
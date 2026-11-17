const express = require ("express");
const app = express();
const port = 3000;

app.use(express.json())

let tree = [
    {
        id: 1,
        name: "Mango Tree",
        color: "Green",
        fruit: "Mango"
    },
    {
        id: 2,
        name: "Orange Tree",
        color: "Green",
        fruit: "Orange"
    },
    {
        id: 3,
        name: "Apple Tree",
        color: "Green",
        fruit: "Apple"
    },
    {
        id: 4,
        name: "Coconut Tree",
        color: "Green",
        fruit: "Coconut"
    },
    {
        id: 5,
        name: "Guava Tree",
        color: "Green",
        fruit: "Guava"
    },
    {
        id: 6,
        name: "Avocado Tree",
        color: "Green",
        fruit: "Avocado"
    },
    {
        id: 7,
        name: "Lemon Tree",
        color: "Green",
        fruit: "Lemon"
    },
    {
        id: 8,
        name: "Pear Tree",
        color: "Green",
        fruit: "Pear"
    },
    {
        id: 9,
        name: "Cherry Tree",
        color: "Green",
        fruit: "Cherry"
    },
    {
        id: 10,
        name: "Pawpaw Tree",
        color: "Green",
        fruit: "Pawpaw"
    }
];


// get all tree
app.get("/api/tree", (req, res) => {
  res.json(tree);
});

// get tree by id
app.get("/api/tree/:id", (req, res) => {
  const treeId = parseInt(req.params.id);
  const tree = tree.find((c) => c.id === treeId);

  if (tree) {
    res.json(tree);
  } else {
    res.status(404).json({ message: "tree not found" });
  }
});

// add a new tree
app.post("/api/tree", (req, res) => {
  const newtrees = req.body;
  tree.push(newtrees);
  res.status(200).json({
    message: "tree added successfully",
    data: newtrees,
  });
});

// update a tree by id
app.put("/api/tree/:id", (req, res) => {
  const treeId = parseInt(req.params.id);
  const updatedtrees = req.body;
  const treeIndex = tree.findIndex((c) => c.id === treeId);

  if (treesIndex !== -1) {
    tree[treesIndex] = { ...tree[treesIndex], ...updatedtrees };
    res.json({
      message: "tree updated successfully",
      data: tree[treesIndex],
    });
  } else {
    res.status(404).json({ message: "tree not found" });
  }
});

// delete a tree by id
app.delete("/api/tree/:id", (req, res) => {
  const treeId = parseInt(req.params.id);
  const treeIndex = tree.findIndex((c) => c.id === treeId);

  if (treesIndex !== -1) {
    tree.splice(treesIndex, 1);
    res.json({ message: "tree deleted successfully" });
  } else {
    res.status(404).json({ message: "tree not found" });
  }
});

// patch a tree by id
app.patch("/api/tree/:id", (req, res) => {
  const treeId = parseInt(req.params.id);
  const updatedFields = req.body;
  const treeIndex = tree.findIndex((c) => c.id === treeId);

  if (treesIndex !== -1) {
    tree[treesIndex] = { ...tree[treesIndex], ...updatedFields };
    res.json({
      message: "tree updated successfully",
      data: tree[treesIndex],
    });
  } else {
    res.status(404).json({ message: "tree not found" });
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

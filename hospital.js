const express = require ("express");
const app = express();
const port = 3000;

app.use(express.json())

let hospital = [
    {
        id: 1,
        name: "University of Uyo Teaching Hospital",
        location: "Uyo, Akwa Ibom",
        country: "Nigeria"
    },
    {
        id: 2,
        name: "Lagos University Teaching Hospital",
        location: "Idi-Araba, Lagos",
        country: "Nigeria"
    },
    {
        id: 3,
        name: "National Hospital Abuja",
        location: "Abuja",
        country: "Nigeria"
    },
    {
        id: 4,
        name: "University College Hospital",
        location: "Ibadan, Oyo",
        country: "Nigeria"
    },
    {
        id: 5,
        name: "Rivers State University Teaching Hospital",
        location: "Port Harcourt, Rivers",
        country: "Nigeria"
    },
    {
        id: 6,
        name: "Federal Medical Centre",
        location: "Owerri, Imo",
        country: "Nigeria"
    },
    {
        id: 7,
        name: "Eko Hospital",
        location: "Ikeja, Lagos",
        country: "Nigeria"
    }
]

// get all hospitals
app.get("/api/hospitals", (req, res) => {
  res.json(hospital);
});

// get hospitals by id
app.get("/api/hospitals/:id", (req, res) => {
  const hospitalId = parseInt(req.params.id);
  const hospital = hospital.find((c) => c.id === hospitalId);

  if (hospital) {
    res.json(hospital);
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
});

// add a new hospital
app.post("/api/hospitals", (req, res) => {
  const newHospital = req.body;
  hospital.push(newHospital);
  res.status(200).json({
    message: "Hospital added successfully",
    data: newHospital,
  });
});

// update a hospitals by id
app.put("/api/hospital/:id", (req, res) => {
  const hospitalId = parseInt(req.params.id);
  const updatedHospital = req.body;
  const hospitalIndex = hospital.findIndex((c) => c.id === hospitalId);

  if (hospitalIndex !== -1) {
    hospital[hospitalIndex] = { ...hospital[hospitalIndex], ...updatedHospital };
    res.json({
      message: "Hospital updated successfully",
      data: hospital[hospitalIndex],
    });
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
});

// delete a hospital by id
app.delete("/api/hospitals/:id", (req, res) => {
  const hospitalId = parseInt(req.params.id);
  const hospitalIndex = hospital.findIndex((c) => c.id === hospitalId);

  if (hospitalIndex !== -1) {
    hospital.splice(hospitalIndex, 1);
    res.json({ message: "Hospital deleted successfully" });
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
});

// patch a hospital by id
app.patch("/api/hospitals/:id", (req, res) => {
  const hospitalId = parseInt(req.params.id);
  const updatedFields = req.body;
  const hospitalIndex = hospital.findIndex((c) => c.id === hospitalId);

  if (hospitalIndex !== -1) {
    hospital[hospitalIndex] = { ...hospital[hospitalIndex], ...updatedFields };
    res.json({
      message: "Hospital updated successfully",
      data: hospital[hospitalIndex],
    });
  } else {
    res.status(404).json({ message: "Hospital not found" });
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

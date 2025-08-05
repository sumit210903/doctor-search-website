// book.js
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).send({ message: "Appointment booked successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

import { Router, type IRouter } from "express";
import healthRouter from "./health.js";
import enquiryRouter from "./enquiry.js";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enquiryRouter);

export default router;

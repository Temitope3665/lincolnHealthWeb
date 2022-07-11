import DrSuccess from "../../assets/Images/drSuccessImg.svg";
import DrLim from "../../assets/Images/drLim.svg";
import HeroBgII from "../../assets/Images/heroSubii.svg";
import HeroBgIII from "../../assets/Images/heroSubiii.svg";
import bgHero from "../../assets/Images/bghero.svg";
import heroSub from "../../assets/Images/heroSub.svg";

export const CarouselImgData = [
    {
        image: bgHero,
        caption:
            `
            <div class="image-slider">
            <div className="mr-4">
              <img src=${heroSub} alt="sub" />
            </div>
            <div style="margin-left: 10px; text-align: left">
              <p style="color: #0166FF; font-size: 12px"">Dr. Alima Hamzat</p>
              <p style="color: #4A4D6C; font-size: 10px;">Radiologist</p>
            </div>
          </div>
            `
    },
    {
        image: HeroBgII,
        caption:
            `
            <div class="image-slider">
            <div className="mr-4">
              <img src=${DrLim} alt="sub" />
            </div>
            <div style="margin-left: 10px; text-align: left">
              <p style="color: #0166FF; font-size: 12px">Dr. Lim Mohammed</p>
              <p style="color: #4A4D6C; font-size: 10px;">Anesthesiologists</p>
            </div>
          </div>
            `
    },
    {
        image: HeroBgIII,
        caption:
            `
            <div class="image-slider">
            <div className="mr-4">
              <img src=${DrSuccess} alt="sub" />
            </div>
            <div style="margin-left: 10px; text-align: left">
              <p style="color: #0166FF; font-size: 12px"">Dr. Success Jane</p>
              <p style="color: #4A4D6C; font-size: 10px;">Cardiologist</p>
            </div>
          </div>
            `
    },
]

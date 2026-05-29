import Image from "next/image";

export default function Home() {
  return (
    <div className="py-10 px-8 ml-72">
      <main className="flex flex-col gap-8 row-start-2 p-20 items-center sm:items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-15 dark:text-white">
          CoSI Pilot Software Document
        </h1>
        <div className="mb-8">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>CoSI Pilot</strong> is a program designed to teach users the basics of controlling drones. This is an instruction manual for Bangkok University’s VR Drone Training Program, “CoSI Pilot”.
The purpose of the manual is to provide users with a clear understanding and method of approach when using the CoSI Pilot program.
          </p>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-15 dark:text-white">
          เอกสารซอฟต์แวร์เรดาร์ DR-172ADV
        </h1>
        <div className="mb-8">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            <strong>หน่วยแสดงผลเรดาร์</strong> (การแสดงสถานการณ์ทางอากาศ: ADS) ออกแบบมาสำหรับระบบป้องกันภัยทางอากาศทางทหาร มีวัตถุประสงค์เพื่อเพิ่มประสิทธิภาพการประมวลผลข้อมูลและการแสดงสถานการณ์ทางอากาศเพื่อการผลิตที่เป็นมาตรฐานและเป็นไปตามมาตรฐาน IEEE 25010 หน่วยนี้มีวัตถุประสงค์เพื่อทดแทนระบบที่ล้มเหลวก่อนหน้านี้ โดยกลับคืนความสามารถในการปฏิบัติงานอย่างเต็มรูปแบบ และแนะนำฟังก์ชันการทำงานใหม่สำหรับการแสดงผลข้อมูลเรดาร์แบบเรียลไทม์ที่เชื่อถือได้และปลอดภัย
          </p>
        </div>
      </main>
    </div>
  );
}

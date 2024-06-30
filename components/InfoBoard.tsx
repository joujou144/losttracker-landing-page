import classnames from "classnames";

type InfoBoardProps = {
  className?: string;
  title: string;
};

const InfoBoard = ({ className, title }: InfoBoardProps) => {
  return (
    <div
      className={classnames(
        `${className} bg-dark-600 text-primary-700 p-5 rounded-lg content-font tarcking-wider font-thin`
      )}
    >
      <p className={"text-[18px] capitalize mb-4"}>{title}</p>

      <p>
        By the end of December 2022, the NCA (National Crime Agency) held 57,125
        active missing person cases. Of these, 10,512 (31 percent) involved
        individuals under 18, and 30,504 (41 percent) were for those under 21.
      </p>
      <br />
      <p>
        In 2022, 346,568 missing person cases were registered in the NCA. During
        the same year, 333,088 records were removed. The removals occurred
        because the individuals were found by law enforcement, returned home, or
        the records were deemed invalid and deleted by the registering agency.
      </p>
    </div>
  );
};

export default InfoBoard;

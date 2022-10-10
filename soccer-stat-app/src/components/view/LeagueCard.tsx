import {
  // getLeagueCardImages,
  // leagueCardImg,
  LeagueData,
} from "components/controller/FetchLogic";
import React from "react";

const LeagueCard: React.FC<LeagueData> = (data) => {
  // const [imagesLoaded, setImages] = useState<leagueCardImg | null>(null); // LOL very strange way to fetch images

  // useEffect(() => {
  //   (async () => {
  //     const leagueEmblemUrl = data.emblem;
  //     const areaFlagUrl = data.area.flag;

  //     const promiseArray = [
  //       getLeagueCardImages(leagueEmblemUrl),
  //       getLeagueCardImages(areaFlagUrl),
  //     ];

  //     const imagesResp = await Promise.allSettled(promiseArray);
  //     const images = imagesResp.map((result) =>
  //       result.status === "fulfilled" ? result.value : null
  //     );
  //     setImages({
  //       emblem: images[0],
  //       flag: images[1],
  //     });
  //   })();
  // }, [data.area.flag, data.emblem]);

  // const toRenderEmblem = (input: leagueCardImg | null) => {
  //   if (input) {
  //     if (input.emblem) {
  //       if (input.emblem.type === "png") {
  //         return <img src={`${input.emblem.body}`} alt="league emblem"></img>;
  //       } else {
  //         return (
  //           <div
  //             className="league-emblem-svg"
  //             role={"img"}
  //             dangerouslySetInnerHTML={{ __html: input.emblem.body }}
  //           />
  //         );
  //       }
  //     }
  //   }
  // };
  // const toRenderFlag = (input: leagueCardImg | null) => {
  //   if (input) {
  //     if (input.flag) {
  //       if (input.flag.type === "png") {
  //         return <img src={`${input.flag.body}`} alt="league area flag"></img>;
  //       } else {
  //         return (
  //           <div
  //             className="league-flag-svg"
  //             role={"img"}
  //             dangerouslySetInnerHTML={{ __html: input.flag.body }}
  //           />
  //         );
  //       }
  //     }
  //   }
  // };

  return (
    <div className="league-card">
      <div className="league-info">
        <div className="league-name">
          <h3>{`${data.name}`}</h3>
        </div>
        <div className="league-emblem">
          {/* {imagesLoaded && toRenderEmblem(imagesLoaded)} */}
          {data.emblem && <img src={data.emblem} alt="league emblem"></img>}
        </div>
      </div>
      <div className="league-area-info">
        <div className="league-area-name">
          <h4>{`${data.area.name}`}</h4>
        </div>
        <div className="league-area-flag">
          {/* {imagesLoaded && toRenderFlag(imagesLoaded)} */}
          {data.area.flag && <img src={data.area.flag} alt="area flag"></img>}
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;

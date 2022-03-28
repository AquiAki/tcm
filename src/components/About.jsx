import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles(() =>
  createStyles({
    button: {
      alignItems: "center",
      borderColor: "#FFB549",
      color: "gray",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "rgb(2, 112, 230)",
        color: "#fff",
      },
    },
  })
);

const About = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  function goBackHome() {
    navigate("/");
  }


  return (
    <div>
      <h3 className="about">【このサイトについて】</h3>
      <p>
        鍼灸の学生や鍼灸師に向けて作ったサイトです
        <br />
        学校の勉強や東洋医学の復習の役に立てば幸いです
      </p>
      <br />
      <h3>【プライバシーポリシー】</h3>
      <h4>個人情報の利用目的</h4>
      <p>
        当サイトでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
        <br />
        取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
      </p>
      <h3>【免責事項】</h3>
      <p>
        当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
        <br />
        また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。
        <br />
        情報が古くなっていることもございます。
        <br />
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </p>
      <h3>【著作権について】</h3>
      <p>
        当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
        <br />
        当サイトは著作権や肖像権の侵害を目的としたものではありません。
        <br />
        著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。
        <br />
        迅速に対応いたします。
      </p>
      <br />
      <Button className={classes.button} onClick={goBackHome}>
        ホームに戻る
      </Button>
    </div>
  );
};
export default About;

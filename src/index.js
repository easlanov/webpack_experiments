import * as $ from "jquery";
import Post from "@models/Post";
import json from "@/assets/json";
import xml from "@/assets/data.xml";
import csv from "@/assets/data.csv";
import WebpackLogo from "@/assets/webpack-logo";
import "@/babel";
import "@/styles/styles.css";
import "@/styles/styles.less";

const post = new Post("Webpack Post Title", WebpackLogo);

$("pre").addClass("code").html(post.toString());

console.log("Post to string:", post.toString(), WebpackLogo);
console.log("JSON:", json);
console.log("xml:", xml);
console.log("csv:", csv);

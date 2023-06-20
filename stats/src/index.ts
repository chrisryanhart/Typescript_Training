import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/htmlReport";

// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);


const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();


// const reader = new MatchReader('football.csv');
// reader.read();


// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );


const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

 
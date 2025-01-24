import styles from "./app.module.scss";

export const App = () => {
  return (
    <main className={styles.root}>
      <h1 className={styles.title}>Webpack curse</h1>

      <ol className={styles.listItems}>
        <li>Settings default config webpack</li>
        <li>ts-loader vs babel-loader vs esbuild-loader</li>
        <li>
          HtmlWebpackPlugin, ForkTsCheckerWebpackPlugin, CopyPlugin,
          MiniCssExtractPlugin, ProgressPlugin, BundleAnalyzerPlugin,
          ReactFastRefresh, HMR
        </li>
        <li>Config decomposition</li>
        <li>Settings modules global.d.ts</li>
        <li>Settings tsconfig</li>
        <li>Alias, source-map, analyzer, lazy chunks, assets, favicon</li>
        <li>Mini setting switch theme</li>
        <li>
          Settings modes (development/production) and adding scripts to run
        </li>
      </ol>
    </main>
  );
};

import styles from "@/styles/banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
				<h1 className={styles.title}>
					Free Virtual Contact Lens Try On Online
				</h1>
				<div className={styles.desc}>
					Experience our Virtual Contact Lens Try-On to visualize different colors and styles instantly.
				</div>
			</div>
    </div>
  );
}
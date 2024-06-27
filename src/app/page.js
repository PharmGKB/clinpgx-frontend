import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container">

      <div className={styles.main}>
        <img src="/logo.svg" alt="ClinPGx.org logo" className={styles.heroLogo}/>
      </div>

      <p>ClinPGx (Clinical Pharmacogenomics Resource) integrates the PharmGKB, CPIC and PharmCAT into a single resource.
        There is confusion in the community at times as to which project (e.g., PharmGKB or CPIC) does what, including
        specific functionality (i.e., CPIC writes genotype-based prescribing guidelines, PharmGKB implements different
        ways to access those guidelines including specific diplotype recommendations and compares those recommendations
        from different resources including CPIC, other guideline groups, FDA PGx and biomarker tables). The multiple
        websites require significant effort to ensure that the databases/KBs stay in sync not only across these groups,
        but with outside resources. PharmGKB coordinates this synchronization as well as data deposition from these
        resources to ClinVar. In addition, multiple resources require more effort by having multiple Scientific Advisory
        Boards, Steering Committees and work by volunteers, applicant institutions, and the NIH to elucidate the
        specific job responsibilities (i.e., a curator on PharmGKB vs. PharmCAT vs. CPIC vs. PharmVar). Lastly, as
        mentioned above, this has created a siloing effect of PGx that cannot and should not be sustained.</p>
      <p>Thus, we are excited that in the coming 18 months, we hope to formally launch ClinPGx with all resources below
        integrated. During this transitionary time, we will begin to introduce ClinPGx wherever appropriate, but will
        NOT be losing the branding of CPIC and the PharmGKB. For example, the CPIC guidelines will remain the CPIC
        guidelines and much of the organizational structure for CPIC will remain the same. The big difference will be
        that you would obtain the CPIC guidelines from the ClinPGx website and the CPIC website will be deprecated.</p>

      <section className="text-center mt-5">
        <h2>Parts of ClinPGx</h2>
        <div className={styles.components}>
          <div>
            <div className={styles.componentLogo}><a href="https://www.pharmgkb.org"><img src="/pharmgkb.svg" alt="PharmGKB logo" style={{height: '2rem', marginTop: '2rem'}}/></a></div>
            <div>Catalog human genetic variation that impacts drug response phenotype</div>
          </div>
          <div>
            <div className={styles.componentLogo}>
              <a href="https://cpicpgx.org">
                <img src="/cpic.svg" alt="CPIC logo" style={{height: '3rem',marginTop: '1rem'}}/>
              </a>
            </div>
            <div>Create and disseminate gene/drug clinical practice guidelines</div>
          </div>
          <div>
            <div className={styles.componentLogo}>
              <a href="https://pharmcat.org">
                <img src="/pharmcat.svg" alt="PharmCAT logo" style={{height: '4rem'}}/>
              </a>
            </div>
            <div>Generate interpretation report with prescribing guidance from genomic data</div>
          </div>
          <div>
            <div className={styles.componentLogo}>
              <a href="https://pharmvar.org">
                <img src="/pharmvar.svg" alt="PharmVar logo" style={{height: '2rem', marginTop: '2rem'}}/>
              </a>
            </div>
            <div>Assign allele nomenclature for pharmacogene haplotypes</div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <p>
          More information will be coming over the next year. Please follow the <a href="https://blog.clinpgx.org">
          ClinPGx blog</a> for updates.
        </p>
        <p>
          If you have questions, please contact us at <a href="mailto:feedback@clinpgx.org">feedback@clinpgx.org</a>
        </p>
      </section>

      <footer className="text-muted"><p>Last updated: Jun 27, 2024</p></footer>
    </main>
  );
}

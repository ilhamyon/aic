// import { Layout, Section } from "components"
import { Row, Col, Result, Button } from "antd"

export default function NotFound() {
	return (
		// <Layout>
			// <Section>
				<Row justify="center">
					<Col lg={12}>
						<Result
							status="404"
							title="404"
							subTitle="Sorry, the page you visited does not exist."
							extra={
								<a href="/">
									<Button type="primary">
										Back Home
									</Button>
								</a>
							}
						/>
					</Col>
				</Row>
			// </Section>
		// </Layout>
	)
}
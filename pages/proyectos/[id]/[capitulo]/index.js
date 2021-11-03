import axios from "axios";
import { Field, Form, Formik, FieldArray } from "formik";
import * as cap from "/indicadores.json";
import { useRouter } from "next/router";
import ruta_server from "../../../../helpers/ruta";

const guardarCalificaciones = async (id, capitulo, values) => {
	try {
		await axios.put(`${ruta_server}/api/proyectos/${id}/${capitulo}`, {
			...values,
		});
	} catch (e) {
		console.log(e);
	}
};

const Proyecto = ({ proyecto, capitulo, capitulo_teorico }) => {
	console.log(capitulo_teorico);
	const router = useRouter();

	return (
		<div className="flex items-top gap-4">
			<div
				className="mt-3 bg-transparent border-4 rounded-full h-4 w-4 flex justify-center items-center"
				style={{ borderColor: `rgba(${proyecto.color})` }}
			></div>

			<div className="w-full flex flex-col gap-6">
				<h1 className="text-3xl">{capitulo.nombre}</h1>
				<Formik
					initialValues={capitulo}
					onSubmit={(values) => {
						guardarCalificaciones(
							router.query.id,
							router.query.capitulo,
							values
						);
					}}
				>
					{({ values }) => (
						<Form>
							<div className="flex flex-col gap-10">
								{capitulo_teorico.indicadores &&
									capitulo_teorico.indicadores.map((indicador, indIndex) => (
										<div key={indicador.nombre}>
											<h2 className="text-2xl">{indicador.nombre}</h2>

											<FieldArray
												name={`indicadores[${indIndex}].subindicadores`}
												render={() => (
													<div className="pl-5 border-l-4 flex flex-col gap-5 pt-3">
														{indicador.subindicadores &&
															indicador.subindicadores.map(
																(subindicador, subIndex) => (
																	<div key={subindicador.nombre}>
																		<h3 className="font-bold">
																			{subindicador.nombre}
																		</h3>
																		<div className="pl-5 border-l-4">
																			<p>{subindicador.descripcion}</p>
																			<div>
																				<Field
																					name={`indicadores[${indIndex}].subindicadores[${subIndex}].calificacion`}
																					type="range"
																					step={
																						subindicador.calificacion_max / 5
																					}
																					min="0"
																					max={subindicador.calificacion_max}
																					list={`lista_${subindicador.nombre}`}
																					className="w-full"
																				/>
																				<datalist
																					id={`lista_${subindicador.nombre}`}
																					className="flex w-full justify-between"
																				>
																					<option value="0" label="0"></option>
																					<option
																						value={
																							subindicador.calificacion_max / 5
																						}
																						label="1"
																					></option>
																					<option
																						value={
																							(subindicador.calificacion_max /
																								5) *
																							2
																						}
																						label="2"
																					></option>
																					<option
																						value={
																							(subindicador.calificacion_max /
																								5) *
																							3
																						}
																						label="3"
																					></option>
																					<option
																						value={
																							subindicador.calificacion_max / 4
																						}
																						label="4"
																					></option>
																					<option
																						value={
																							subindicador.calificacion_max
																						}
																						label="5"
																					></option>
																				</datalist>
																			</div>
																		</div>
																	</div>
																)
															)}
													</div>
												)}
											></FieldArray>
										</div>
									))}
							</div>

							<button
								type="submit"
								className="self-end bg-green-100/50 w-1/5 rounded-lg text-green-500 px-6 py-2 hover:scale-95 transition font-medium"
							>
								Guardar
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { id, capitulo } = context.query;

	const res = await axios.get(`${ruta_server}/api/proyectos/${id}/${capitulo}`);

	const respuesta = res.data.data;

	if (!respuesta) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...respuesta,
		},
	};
}

export default Proyecto;
